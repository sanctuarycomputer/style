export default () => {
  if (props.loadingStatus === Status.REJECTED) {
    return <div>props.fetchUsersError.message</div>;
  }

  return (
    <div>
      <header>Users routes...</header>
      <section>
        {props.children}
      </section>
      <footer></footer>
    </div>
  );
}
