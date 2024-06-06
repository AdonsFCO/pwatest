import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Page = () => {
  return (
    <main>
      <h1>Hello jorge this is just a test</h1>
      <a href="/api/auth/logout">Logout</a>
    </main>
  );
};

export default withPageAuthRequired(Page);
