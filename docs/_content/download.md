---
layout: page
title: Download
heading: Software Downloads
summary: >-
  Active Space software downloads.
---
<div class="card">
  <div class="card-header">
    Active Space Desktop App
  </div>
  <div class="card-body">
    <h5 class="card-title">Current Version</h5>
    <p class="card-text">The latest version of the desktop app is <strong>{{ site.github.latest_release.name }}</strong>. It was released on {{ site.github.latest_release.published_at | date: "%B %d, %Y" }}.</p>
    <a href="{{ site.github.latest_release.html_url  }}" class="btn btn-lg btn-primary">DOWNLOAD</a>
  </div>
</div>
<hr />
<div class="card">
  <div class="card-body">
    <a href="{{ site.github.releases_url }}" class="btn btn-primary">Other Versions</a>
  </div>
</div>
