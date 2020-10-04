<script>
  import { Router, Route, navigate } from 'svelte-routing'
  import IconButton from '@smui/icon-button'

  import HomePage from './home/views/HomePage.svelte'
  import DiagnosisPage from './diagnosis/views/DiagnosisPage.svelte'
  import IssuePage from './issues/views/IssuePage.svelte'
  import Footer from './common/components/Footer.svelte'

  export let url = ''
  const goToHome = () => {
    navigate('/', { replace: true })
  }
</script>

<style>
  .container {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    margin: auto;
    position: relative;
  }

  .container::after {
    content: '';
    background-image: url('/background.jpg');
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
  }

  .home-button {
    position: absolute;
    left: 20px;
    top: 20px;
  }
  .page-container {
    max-width: 1400px;
  }
</style>

<div class="container">
  <div class="home-button">
    <IconButton class="material-icons" on:click={goToHome}>home</IconButton>
  </div>
  <div class="page-container">
    <Router {url}>
      <Route path="/issues/:id" component={IssuePage} />
      <Route path="/diagnosis" component={DiagnosisPage} />
      <Route path="/" component={HomePage} />
    </Router>
  </div>
  <Footer />
</div>
