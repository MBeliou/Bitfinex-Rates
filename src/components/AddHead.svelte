<script>
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <meta name="description" content={$_('navbar.tag')} />

  <!-- 
      <meta property="og:site_name" name="og:site_name" content="Noveltech">
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description"
    content="{{ with .Description }}{{ . }}{{ else }}{{ if .IsPage }}{{ .Summary }}{{ else }}{{ with .Site.Params.description }}{{ . }}{{ end }}{{ end }}{{ end }}">
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}">
<meta property="og:url" content="{{ .Permalink }}">
<meta name="og:image" property="og:image" content="https://noveltech.dev/favicon-96x96.png">

   -->
</svelte:head>
