const sortingRadioButton = $('#sorting-radio');
const aggregationRadioButton = $('#aggregation-radio');
const subreddit = $('#subreddit');

const aggregationSection = $('.aggregation');
const sortingSection = $('.sorting');

const sortingFieldName = $('#sorting-field-name');
const sortingDirection = $('#sorting-direction');
const sortingFields = $('#sorting-fields');
const aggregationFieldName = $('#aggregation-field-name');

const SQLradioButton = $('#answer-sql');
const CSVradioButton = $('#answer-csv');
const SQLOptions = $('.SQL');

const sendButton = $('#send-request');

const toggleSections = function() {
  aggregationSection.toggleClass('hidden');
  sortingSection.toggleClass('hidden');
};

const SQLTableName = $('#sql-table-name');

const toggleSqlOptions = function() {
  SQLOptions.toggleClass('hidden');
};

SQLradioButton.click(toggleSqlOptions);
CSVradioButton.click(toggleSqlOptions);

sortingRadioButton.click(toggleSections);
aggregationRadioButton.click(toggleSections);

sendButton.click(function(event) {
  event.preventDefault();

  const strategy = $('input[name="type"]:checked').val();
  const answerType = $('input[name="answer-type"]:checked').val();

  let data = '';
  if (strategy === 'sorting') {
    data = `fieldName=${sortingFieldName.val()}&direction=${sortingDirection.val()}&fields=${sortingFields.val()}`;
  } else {
    data = `fieldName=${aggregationFieldName.val()}`;
  }

  window.location = `/load?subreddit=${subreddit.val()}&strategy=${strategy}&${data}&answerType=${answerType}&tableName=${SQLTableName.val()}`;
});
