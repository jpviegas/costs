function NotFound() {
  document.title = 'Page Not Found';

  return (
    <div className="pageNotFound">
      <h1>Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </div>
  );
}

export default NotFound;
