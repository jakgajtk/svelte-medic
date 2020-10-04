<script>
  import { LINKEDIN_URL, GITHUB_URL } from '../constants'
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
    background-color: #ededed;
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
    background-color: white;
    background-image: url('https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg');
  }
  .github {
    background-color: white;
    background-image: url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
  }
</style>

<div class="container">
  <a
    href={LINKEDIN_URL}
    target="_blank"
    class="linkedin"
    rel="noopener noreferrer" />
  <a
    href={GITHUB_URL}
    target="_blank"
    class="github"
    rel="noopener noreferrer" />
</div>
