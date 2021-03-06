var contentNode = document.getElementById('contents');
var component = <h1>Hello World!</h1>; // A simple JSX component ReactDOM.render(component, contentNode);
ReactDOM.render(component, contentNode);

const contentNode = document.getElementById('contents');

class IssueList extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue list.</div>
); }
}
ReactDOM.render(<IssueList />, contentNode);


loadData() {
  fetch('/api/issues').then(response =>
    response.json()
  ).then(data => {
    console.log("Total count of records:", data._metadata.total_count);
    data.records.forEach(issue => {
      issue.created = new Date(issue.created);
      if (issue.completionDate)
        issue.completionDate = new Date(issue.completionDate);
    });
    this.setState({ issues: data.records });
  }).catch(err => {
    console.log(err);
  });
}


createIssue(newIssue) {
  fetch('/api/issues', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIssue),
  }).then(response => {
    if (response.ok) {
      response.json().then(updatedIssue => {
        updatedIssue.created = new Date(updatedIssue.created);
        if (updatedIssue.completionDate)
updatedIssue.completionDate = new Date(updatedIssue.completionDate); const newIssues = this.state.issues.concat(updatedIssue); this.setState({ issues: newIssues });
});
} else {
      response.json().then(error => {
        alert("Failed to add issue: " + error.message)
}); }
  }).catch(err => {
    alert("Error in sending data to server: " + err.message);
}); }