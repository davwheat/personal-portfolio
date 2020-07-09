const articlePrefix = `https://www.giffgaff.com/help/articles`;
const categoryPrefix = `https://www.giffgaff.com/help/topics`;

function ParseArticle(data) {
  const Parsed = {
    articleId: data.articleId,
    title: data.title,
    url: GetUrlFromSlug('article', data.url),
    slug: data.url,
    categoryId: data.categoryId,
    categoryName: data.categoryName,
    categoryUrl: GetUrlFromSlug('article', data.categoryUrl),
    categorySlug: data.categoryUrl,
    visible: data.visible,
    content: JSON.parse(data.content),
    metadata: JSON.parse(data.metadata),
  };

  return Parsed;
}

function GetUrlFromSlug(type, slug) {
  switch (type) {
    case 'article':
      return `${articlePrefix}/${slug}`;
    case 'category':
    case 'topic':
      return `${categoryPrefix}/${slug}`;
  }
}

function ArticleContentToHtml(article) {
  const { content, title } = article;

  let finalOutput = document.createElement('article');

  let textOutput = '';

  textOutput += `<h1 class="gg-u-text-shout">${title}</h1>`;

  content.blocks.forEach((block, i) => {
    let lastBlock = { type: 'unstyled' };

    if (i > 0) {
      lastBlock = content.blocks[i - 1];
    }

    textOutput += ParseBlock(block, lastBlock);
  });

  finalOutput.innerHTML = textOutput;

  return finalOutput;
}

function ParseBlock(block, lastBlock) {
  const { key, text, depth, inlineStyleRanges, entityRanges, data } = block;
  let textOutput = '';

  const Element = BlockTypeToElement(block);

  if (['ordered-list-item', 'unordered-list-item'].includes(block.type)) {
    if (lastBlock.type !== block.type) {
      switch (block.type) {
        case 'ordered-list-item':
          textOutput += `<ol class="gg-c-list-ordered">`;
          break;

        case 'unordered-list-item':
          textOutput += `<ul class="gg-c-list">`;
          break;
      }
    }
  } else if (['ordered-list-item', 'unordered-list-item'].includes(lastBlock.type)) {
    if (lastBlock.type !== block.type) {
      switch (block.type) {
        case 'ordered-list-item':
          textOutput += `</ol>`;
          break;

        case 'unordered-list-item':
          textOutput += `</ul>`;
          break;
      }
    }
  }

  textOutput += Element.start;

  let i = 0;
  for (let char of text) {
    // Stuff to be added *after* the letter.
    let append = '';

    inlineStyleRanges.forEach(style => {
      if (i === style.offset) {
        // Inline style starts!
        switch (style.style) {
          case 'UNDERLINE':
            textOutput += '<u>';
            break;

          default:
            break;
        }
      } else if (i === style.offset + style.length || (i === style.offset + style.length + 1 && i + 1 === text.length)) {
        // Inline style ends!
        switch (style.style) {
          case 'UNDERLINE':
            append += '</u>';
            break;

          default:
            break;
        }
      }
    });

    entityRanges.forEach(entity => {
      const realEntity = article.content.entityMap[entity.key];

      if (i === entity.offset) {
        // Inline style starts!
        switch (realEntity.type) {
          case 'LINK':
            textOutput += `<a class="gg-u-link" href="${realEntity.data.url ? realEntity.data.url : realEntity.data.href}">`;
            break;

          default:
            break;
        }
      } else if (i === entity.offset + entity.length || (i === entity.offset + entity.length - 1 && i + 1 === text.length)) {
        // Inline style ends!
        switch (realEntity.type) {
          case 'LINK':
            append += '</a>';
            break;

          default:
            break;
        }
      }
    });

    textOutput += char;
    textOutput += append;

    i++;
  }

  textOutput += Element.end;

  return textOutput;
}

function BlockTypeToElement(block) {
  const { type, key } = block;

  let element,
    classes = [key],
    attributes = [];

  switch (type) {
    case 'header-two':
      element = `h2`;
      classes.push('gg-u-text-loud');
      break;

    case 'unstyled':
      element = `p`;
      break;

    case 'ordered-list-item':
    case 'unordered-list-item':
      element = `li`;
      break;

    default:
      element = `p`;
      attributes = [{ name: 'style', value: `color: #f00;` }];
      console.warn(`Unknown element type: `, type);

      break;
  }

  const attributesString = attributes.reduce(AttributeReducer, '');

  return {
    start: `<${element} class="${classes.join(' ')}" ${attributesString}>`,
    end: `</${element}>`,
  };
}

function AttributeReducer(attributes, attribute) {
  return attributes + `${attribute.name}="${attribute.value}" `;
}
