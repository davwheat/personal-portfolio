const dataUrl = `/community-nonsense/kb-diff/data`;
let canHideMsg = false;

function hideLoadingMsg() {
  while (!canHideMsg) {
    setTimeout(function () {
      hideLoadingMsg();
    }, 100);
    return;
  }

  canHideMsg = false;
  $('#loading-message').addClass('hidden');
}

function showLoadingMsg() {
  $('#loading-message').removeClass('hidden');
}

let allCategories;

let selectedCategory;
let categoryArticles;

let selectedArticle;

// prepend user inputted data with "u_"
let u_selectedArticleData;

$.get(`${dataUrl}/categories.json`, function (data) {
  allCategories = data;
  allCategories.sort((a, b) => a.catOrder - b.catOrder);

  $catList = $('#category fieldset ol');

  allCategories.forEach(category => {
    $catList.append(
      `   
    <li class="gg-c-chunky-buttons__option">
    <input
        name="category"
        type="radio"
        id="category-${category.id}"
        class="gg-c-chunky-buttons__radio"
        value="${category.id}"
        required
    />
    <label class="gg-c-chunky-buttons__button" for="category-${category.id}">
        <span class="gg-c-chunky-buttons__text">
            ${category.name}
        </span>
    </label>
    </li>
`
    );
  });

  canHideMsg = true;
  hideLoadingMsg();
});

$('#category button').click(function (e) {
  e.preventDefault();

  if ($('#category input:checked').length < 1) {
    return;
  }

  showLoadingMsg();

  // hide last category AFTER loading msg has appeared
  setTimeout(function () {
    $('#category').addClass('hidden');
    $('#article').removeClass('hidden');

    canHideMsg = true;
  }, 400);

  const selectedCategoryId = parseInt($('#category input:checked').attr('value'));
  selectedCategory = allCategories.find(c => c.id === selectedCategoryId);

  $.get(`${dataUrl}/articles/${selectedCategory.catUrl}.json`, data => {
    categoryArticles = data.articleList.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    $articleList = $('#article fieldset ol');

    categoryArticles.forEach((article, i) => {
      $articleList.append(
        `   
      <li class="gg-c-chunky-buttons__option">
      <input
          name="article"
          type="radio"
          id="article-${i}"
          class="gg-c-chunky-buttons__radio"
          value="${i}"
          required
      />
      <label class="gg-c-chunky-buttons__button" for="article-${i}">
          <span class="gg-c-chunky-buttons__text">
              ${article.title}
          </span>
      </label>
      </li>
`
      );
    });

    hideLoadingMsg();
  });
});

$('#article button').click(function (e) {
  e.preventDefault();

  if ($('#article input:checked').length < 1) {
    return;
  }

  showLoadingMsg();

  // hide last category AFTER loading msg has appeared
  setTimeout(function () {
    $('#article').addClass('hidden');
    $('#articleData').removeClass('hidden');
    canHideMsg = true;
  }, 400);

  const selectedArticleId = parseInt($('#article input:checked').attr('value'));
  selectedArticle = categoryArticles[selectedArticleId];

  let selectedArticleUrl = selectedArticle.url;

  // $.get(
  //   `${dataUrl}/articles/${selectedCategory.catUrl}/${selectedArticleUrl}.json`,
  //   (data) => {
  //     selectedArticleData = data;

  //     console.log(`Current saved article data`, data);

  const url = `https://publicapi.giffgaff.com/gateway/knowledgebase-api/v1/articles/url/${selectedArticleUrl}`;

  $('#article-data-link').attr('href', url);

  hideLoadingMsg();
  //   }
  // );
});

$('#articleData button').click(function (e) {
  e.preventDefault();

  showLoadingMsg();

  const $articleData = $('#article-data-input');
  const u_data = $articleData.val();

  let u_data_JSON;

  try {
    u_data_JSON = JSON.parse(u_data);
    $('#article-data-input-container').removeClass('gg-c-form__element--invalid');
  } catch (e) {
    $('#article-data-input-container').addClass('gg-c-form__element--invalid');
    console.error('ERROR: invalid JSON', u_data);

    hideLoadingMsg();
    return false;
  }

  if (u_data_JSON.code) {
    $('#article-data-input-container').addClass('gg-c-form__element--invalid');
    console.error('ERROR: JSON is an error! ', u_data);

    hideLoadingMsg();
    return false;
  }

  u_selectedArticleData = JSON.parse(u_data);

  const Article = ParseArticle(u_selectedArticleData);
});
