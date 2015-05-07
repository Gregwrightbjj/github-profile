## Github Profile

http://gregwrightbjj.github.io/github-profile

### Description

Let's bring together the concepts from this week: AJAX, APIs, and templating. We're going to take data from GitHub's API and recreate your profile's "Repositories" page. (Mine is [here](https://github.com/kylehill?tab=repositories).)

### Objectives

After completing this assignment, you should feel confident using:

* Third-party APIs and reading API documentation
* jQuery AJAX
* Using and iterating over arrays and objects with JavaScript
* Templating with Handlebars
* HTML and CSS

### Details

Two things you should do before you start:

**First**, publicize your membership in the class GitHub organization. Do that by going to the [organization page](https://github.com/TIY-DC-FEE-Jan-2015) and clicking on "People" in the right column. Find your account and set the Public/Private dropdown next to your name to "Public".

**Second**, create an API access token unique to yourself. Passing this access token as a parameter on API calls tells GitHub that you're a registered user (you, specifically) and raises the rate limit of API calls per hour, which is useful during development. Here's how to do that:

1. Click on the "gear" icon in the page header whenever you're logged in to go to your account settings page.
2. Click on "Applications" on the left-side nav.
3. In the "Personal access tokens" section, click the "Generate new token" button.
4. Give it a description so you'll remember what it's for, and **uncheck all boxes** under "Select Scopes". (This removes any special permissions from it, so that if someone else looks at your code and sees the token, they can't do anything to mess with you.)
5. Click the "Generate token" button; on the next screen, copy the long string that's your new access token.

You can then pass that in as a parameter to any GitHub API call:

`https://api.github.com/users/kylehill?access_token=9bcab58d9a29c23c64092c5f0cd8d1c969d7a4f2`

### Normal Mode

Create a web page that pulls in data from GitHub's API that replicates the content and **design** on your profile's repository tab. You'll need to include information from your github user account and repositories -- that's accessible at:

* `https://api.github.com/users/<username>`
* `https://api.github.com/users/<username>/repos`

Remember to include the `access_token` parameter so you don't get rate limited.

Write `$.ajax` requests to those URLs. After loading data from the API, make sure to display the content that matches what's on the real page, **using Handlebars templates** for the user and repository. I'll be looking for (at least) the following fields for the user data (the left column):

* `login`
* `avatar_url`
* `name`
* `company`
* `location`
* `email`
* `created_at`
* `blog`

If a user doesn't have one or more of these fields filled in, display nothing for it appropriately (for example, I don't have a blog listed.)

For the repositories, I'll want to see the following for each:

* `name`
* `language`
* `stargazers_count`
* `forks`
* `updated_at`

### Hard Mode

Normal Mode, but in addition:

* Retrieve the `followers` and `following` totals from the user record, and get the count of starred repos from the user's `starred_url` endpoint. Display that data beneath the demographic information.
* Retrieve data from the user's `organizations_url` endpoint to get the list of organizations that they belong to and display the `avatar_url` thumbnails.
* Write some code that analyzes the date in the `updated_at` field and, instead of displaying the date, displays the condensed, human readable form ("22 minutes ago", "6 hours ago", "2 weeks ago").
