<script>
    export let title = '';
    export let links = {};
  </script>
  
  <div class="section">
    <h2>{title}</h2>
    <div class="button-grid">
      {#each Object.entries(links) as [name, url]}
        <a 
          href={url} 
          class="button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {name.toUpperCase()}
        </a>
      {/each}
    </div>
  </div>
  
  <style>
    .section {
      background-color: var(--card-background);
      border-radius: 10px;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
  
    .section h2 {
      font-size: 1rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
      text-align: center;
      border-bottom: 1px solid rgba(74, 108, 247, 0.2);
      padding-bottom: 0.5rem;
    }
  
    .button-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.75rem;
    }
  
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0.75rem;
      background-color: transparent;
      color: var(--primary-color);
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
      text-align: center;
      border: 1px solid var(--primary-color);
      font-size: 0.8rem;
      transition: all 0.2s ease;
    }
  
    .button:hover {
      background-color: var(--primary-color);
      color: white;
      transform: scale(1.05);
    }
  
    @media (max-width: 600px) {
      .button-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
  