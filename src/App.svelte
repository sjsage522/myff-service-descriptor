<script>
	import { onMount } from 'svelte';
	import { servicesConfig, loadServicesConfig } from './stores/servicesStore';
	import ServiceSection from './components/ServiceSection.svelte';
  
	let config;
	servicesConfig.subscribe(value => {
	  config = value;
	});
  
	onMount(loadServicesConfig);
  </script>
  
  <main>
	<div class="container">
	  {#if config && config.services}
		<header class="header">
		  <h1>🐾 My Furry Friends Services</h1>
		  <p>{config.description}</p>
		  <span class="env-badge">Environment: {config.environment}</span>
		</header>
  
		<ServiceSection 
		  title="Resource Server Swagger Links" 
		  links={config.services.resource_server_swagger_links} 
		/>
  
		<ServiceSection 
		  title="Middleware Insight Links" 
		  links={config.services.middleware_insight_links} 
		/>
  
		<ServiceSection 
		  title="GitHub Repositories" 
		  links={config.services.github_links} 
		/>
  
		<footer>
		  © 2024 My Furry Friends. All rights reserved.
		</footer>
	  {:else}
		<p>Loading...</p>
	  {/if}
	</div>
  </main>
  
  <style>
	:root {
	  --primary-color: #4a6cf7;
	  --secondary-color: #6b7280;
	  --background-color: #f4f5f7;
	  --card-background: white;
	  --text-color: #1f2937;
	}
  
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
  
	main {
	  font-family: 'Inter', sans-serif;
	  background-color: var(--background-color);
	  color: var(--text-color);
	  line-height: 1.6;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  padding: 1rem;
	}
  
	.container {
	  width: 100%;
	  max-width: 900px;
	  display: flex;
	  flex-direction: column;
	  gap: 1.5rem;
	}
  
	.header {
	  text-align: center;
	  margin-bottom: 1rem;
	}
  
	.header h1 {
	  font-size: 2rem;
	  font-weight: 600;
	  color: var(--primary-color);
	  margin-bottom: 0.5rem;
	}
  
	.header p {
	  color: var(--secondary-color);
	  max-width: 500px;
	  margin: 0 auto;
	  font-size: 0.9rem;
	}
  
	.env-badge {
	  background-color: var(--primary-color);
	  color: white;
	  display: inline-block;
	  padding: 0.25rem 0.5rem;
	  border-radius: 4px;
	  font-size: 0.7rem;
	  margin-top: 0.5rem;
	}
  
	footer {
	  margin-top: 1rem;
	  font-size: 0.75rem;
	  color: var(--secondary-color);
	  text-align: center;
	}
  </style>