# Job Autofill

This is a small mobile-friendly autofill tool for repeated job applications.

## Simple Flow

1. Upload this `job-autofill` folder to GitHub.
2. Enable GitHub Pages for the repo.
3. Open this page on your phone:

   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/job-autofill/`

4. Tap `Copy Job Autofill Bookmark URL`.
5. Create any browser bookmark named `Job Autofill`.
6. Edit that bookmark and replace its URL with the copied text.
7. Open a job application form.
8. Type `Job Autofill` in the browser address bar and tap the bookmark suggestion.

That runs `autofill.js` on the current job form.

## Files

- `index.html`: simple mobile setup page.
- `autofill.js`: the actual autofill script with your details.
- `profile.json`: your editable profile source.
- `generator.html`: advanced builder/debug page.

## Privacy Warning

`autofill.js` contains your personal details. If your GitHub repo is public, anyone can read those details.

For privacy, use a private hosting option or remove sensitive fields before publishing.

## Limitation

Resume and cover letter upload fields cannot be filled by JavaScript. Browsers block scripts from selecting files. Forms that ask for resume or cover letter links can be filled.
