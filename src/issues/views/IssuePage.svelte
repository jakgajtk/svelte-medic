<script>
  import { onMount, onDestroy } from 'svelte'
  import IssueStore from '../store/store'
  import { authToken } from '../../auth/store/store'
  import Loader from '../../common/components/Loader.svelte'

  export let id

  onMount(async () => {
    await IssueStore.getIssue($authToken, id)
  })
  onDestroy(() => {
    IssueStore.clearIssue()
  })
</script>

<style>
  .container {
    max-width: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .body {
    margin-bottom: 8px;
  }
  .headline {
    margin-bottom: 65px;
    margin-top: 100px;
  }
</style>

<svelte:head>
  <title>Issue</title>
</svelte:head>
<div class="container">
  <div class="mdc-typography--headline3 headline">
    {$IssueStore.issue?.Name || 'Issue'}
  </div>
  {#if $IssueStore.isLoading}
    <Loader />
  {:else}
    <div class="mdc-typography--body1 body">
      {$IssueStore.issue?.Description}
    </div>
    <div class="mdc-typography--body1 body">
      {$IssueStore.issue?.MedicalCondition}
    </div>
    <div class="mdc-typography--body1 body">
      {$IssueStore.issue?.TreatmentDescription}
    </div>
  {/if}
</div>
