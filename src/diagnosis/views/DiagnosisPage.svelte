<script>
  import Select from 'svelte-select';
  import { issues } from '../store/store';

  let selectedIssues = [];
  const handleSelect = (event) => {
    selectedIssues = [...selectedIssues, event.detail];
  };

  let selectOptions = [];
  $: selectOptions = $issues?.map(item => ({
    label: item.Name,
    value: item.ID,
  }));
  let selectedValue;
</script>

<style>
  .search-container {
    margin-top: 100px;
    width: 560px;
  }
  .search-container {
    --inputPadding: 4px 10px 0px 10px;
  }
</style>

<h1>Get your diagnosis</h1>
<div class="search-container">
  <h3>Pick your symptoms</h3>
  <Select items={selectOptions} bind:selectedValue on:select={handleSelect} isMulti />
<!--  {#each selectedIssues as selectedIssue}-->
<!--    <div>{selectedIssue.label}</div>-->
<!--  {/each}-->
</div>
