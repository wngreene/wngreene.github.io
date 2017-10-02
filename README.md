# wngreene.github.io

[W. Nicholas Greene's](http://wngreene.github.io) personal website, generated
using [Jekyll](https://jekyllrb.com/).

Because this site uses custom Jekyll plugins, GitHub pages cannot generate it
automatically. The workaround is to commit the site output to the `master`
branch. The source code for the site is on the `dev` branch.

### Build Instructions
```bash
git checkout dev
# ... make changes
jekyll build
# Site should now be in the _site folder.
```

### Local Server
```bash
# build as above
jekyll serve
firefox http://localhost:4000
```

### Publishing (Committing to Master)
```bash
# build as above (make sure to rebuild after serving locally)
git checkout master
cp -r _site/* .
git commit -am "Update master."
# Check website to see if changes propagated.
```
