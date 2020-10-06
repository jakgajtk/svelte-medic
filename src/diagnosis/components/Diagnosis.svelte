<script>
  import Paper, { Title, Subtitle, Content } from '@smui/paper'
  import Chip, { Icon, Checkmark, Text } from '@smui/chips'
  import { navigate } from 'svelte-routing'

  export let issue
  export let specializations

  const handleReadMore = () => {
    navigate(`/issues/${issue.ID}`, { replace: true })
  }
</script>

<style>
  .container {
    margin-top: 30px;
  }
  * :global(.paper) {
    margin: 0 auto;
    max-width: 600px;
  }
  .chip {
    margin-top: 15px;
  }
  .paper-content {
    margin-top: 6px;
    margin-bottom: 3px;
  }
</style>

<div class="container">
  <Paper class="paper" transition elevation={10}>
    <Title>{issue.Name}</Title>
    <Subtitle>Probability - {issue.Accuracy}%</Subtitle>
    <div class="paper-content">
      <Content>{issue.IcdName}</Content>
      <Content>
        Suggested specialisation: {specializations.map((spec) => spec.Name).join(', ')}
      </Content>
    </div>
    <div class="chip">
      <Chip on:click={handleReadMore}>
        <Text>Learn more about {issue.Name}</Text>
      </Chip>
    </div>
  </Paper>
</div>
