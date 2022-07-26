function NotFound() {
  document.title = 'Page Not Found';

  return (
    <main className="page-not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <p>You will be redirected to home page</p>;
    </main>
  );
}

export default NotFound;
