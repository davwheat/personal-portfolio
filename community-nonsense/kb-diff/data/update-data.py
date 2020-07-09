import os
import urllib.request
import json


def mkdir(path):
    try:
        os.mkdir(path)
    except OSError:
        print("Creation of the directory %s failed" % path)
    else:
        print("Successfully created the directory %s " % path)


def download(url, path):
    print(f"Downloading {path} from {url}")
    urllib.request.urlretrieve(url, path)


def read(path):
    with open(path, "r") as f:
        return f.read()


mkdir("articles")

api = "https://publicapi.giffgaff.com/gateway/knowledgebase-api/v1"

download(api + "/categories", "categories.json")

categories = json.loads(read("categories.json"))

for category in categories:
    mkdir(f"articles/{category['catUrl']}")
    download(
        f"{api}/articles/categoryURL/{category['catUrl']}", f"articles/{category['catUrl']}.json")

    articles = json.loads(
        read(f"articles/{category['catUrl']}.json"))["articleList"]

    #! users now supply individual article data

    # for article in articles:
    #     download(f"{api}/articles/url/{article['url']}",
    #              f"articles/{category['catUrl']}/{article['url']}.json")
