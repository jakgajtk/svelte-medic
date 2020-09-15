<script>
  import { Router, Link, Route } from 'svelte-routing';

  import HomePage from './home/views/HomePage.svelte';
  import DiagnosisPage from './diagnosis/views/DiagnosisPage.svelte';
  import IssuePage from './issues/views/IssuePage.svelte';
  import IssuesListPage from './issues/views/IssuesListPage.svelte';

  let active = 'Home';
  export let url = '';
</script>

<style>
  nav {
    height: 80px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    span {
      margin-right: 15px;
    }
  }

</style>

<Router {url}>
  <nav>
    <span>
      <Link to="/">Home</Link>
    </span>
    <span>
      <Link to="/issues">Issues</Link>
    </span>
    <span>
      <Link to="/diagnosis">Get Diagnosis</Link>
    </span>
  </nav>
  <div>
    <Route path="issues/:id" component={IssuePage} />
    <Route path="issues" component={IssuesListPage} />
    <Route path="diagnosis" component={DiagnosisPage} />
    <Route path="/" component={HomePage} />
  </div>
</Router>
