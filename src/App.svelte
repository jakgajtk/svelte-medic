<script>
	import { Router, Link, Route } from "svelte-routing";
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	import HomePage from "./home/views/HomePage.svelte";
	import DiagnosisPage from "./diagnosis/views/DiagnosisPage.svelte";
	import IssuePage from "./issues/views/IssuePage.svelte";
	import IssuesListPage from "./issues/views/IssuesListPage.svelte";

	export let url = "";
</script>

<Router url={url}>
	<TopAppBar variant="static" color="#00FF00">
		<Row>
			<Section>
				<IconButton class="material-icons">menu</IconButton>
				<Title>Static</Title>
			</Section>
			<Section align="end" toolbar>
				<IconButton class="material-icons" aria-label="Download">file_download</IconButton>
				<IconButton class="material-icons" aria-label="Print this page">print</IconButton>
				<IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
			</Section>
		</Row>
	</TopAppBar>
	<nav>
		<Link to="/">Home</Link>
		<Link to="issues">Issues</Link>
		<Link to="diagnosis">Get Diagnosis</Link>
	</nav>
	<div>
		<Route path="issues/:id" component={IssuePage} />
		<Route path="issues" component={IssuesListPage} />
		<Route path="diagnosis" component={DiagnosisPage} />
		<Route path="/" component={HomePage} />
	</div>
</Router>