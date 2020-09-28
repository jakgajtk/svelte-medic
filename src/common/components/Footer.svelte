<script>
  import IconButton from '@smui/icon-button'
  import { LINKEDIN_URL, GITHUB_URL } from '../constants'

  const goToLinkedin = () => {
    const w = window.open(LINKEDIN_URL, '_blank')
    w.opener = null
  }

  const goToGithub = () => {
    const w = window.open(GITHUB_URL, '_blank')
    w.opener = null
  }
</script>

<style>
  .container {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #5693a2;
    height: 45px;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 15px;
    margin-right: 15px;
  }
  .linkedin {
    background-image: url('https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg');
  }
  .github {
    background-image: url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
  }
</style>

<div class="container">
  <a
    href="https://www.linkedin.com/in/jakub-gajtkowski-37031077/"
    target="_blank"
    class="linkedin" />
  <a href="https://github.com/jakgajtk" target="_blank" class="github" />
</div>
