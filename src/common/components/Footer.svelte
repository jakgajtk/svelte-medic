<script>
  import IconButton from '@smui/icon-button'
  import { LINKEDIN_URL, GITHUB_URL } from "../constants";

  const goToLinkedin = () => {
    const w = window.open(LINKEDIN_URL, "_blank");
    w.opener = null;
  }

  const goToGithub = () => {
    const w = window.open(GITHUB_URL, "_blank");
    w.opener = null;
  }
</script>

<style>
  .container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .linkedinButton {
    background-image: url('https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg')
  }
</style>

<div class="container">
  <IconButton class="material-icons" on:click={goToLinkedin}>linked_in</IconButton>
  <IconButton class="material-icons" on:click={goToGithub}>git_hub</IconButton>
</div>
