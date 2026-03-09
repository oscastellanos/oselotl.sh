<script lang="ts">
  import { siteConfig } from '$lib/config';
</script>

<svelte:head>
  <title>About | {siteConfig.title}</title>
  <meta name="description" content="About {siteConfig.author}" />
</svelte:head>

<div class="content-wrapper animate-in">
  <h1 class="gradient-text">About me</h1>
  
  <div class="post-content">
    <p>
      Welcome to my corner of the internet! I'm <strong>{siteConfig.author}</strong>, and this is my personal blog 
      where I share thoughts, tutorials, and projects.
    </p>
    <p>
      I am a Machine Learning Operations Engineer by day, tackling interesting problems with <a href="https://radlab.ai" target="_blank" rel="noopener noreferrer">radlab.ai</a> 
      at night and on weekends, and I work on research whenever I get the chance in between. 
    </p>
    
    <p>
      This blog focuses on my personal research interests that I simply have a passion for. 
      I’m a strong advocate for open source software, ethical AI, and AI for science. 
    </p>
    
    <h2>Get in touch</h2>
    <p>
      Feel free to reach out via any of the social links in the footer, or 
      {#if siteConfig.social.email}
        send me an email at <a href="mailto:{siteConfig.social.email}">{siteConfig.social.email.replace('@', ' {at} ')}</a>.
      {:else}
        connect with me on social media.
      {/if}
    </p>
  </div>
</div>
