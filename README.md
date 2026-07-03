# Job Autofill

This is a small mobile-friendly autofill tool for repeated job applications.

It can be used as a browser bookmarklet or as a Tampermonkey userscript in Kiwi Browser on Android.

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

## Tampermonkey Mobile Flow

1. Install Kiwi Browser on Android.
2. Install the Tampermonkey extension in Kiwi Browser.
3. Create a new Tampermonkey script.
4. Paste the full contents of `autofill.js`.
5. Save the script.
6. Open a job application page from LinkedIn, Naukri, or a company career site in Kiwi Browser.
7. Let the script run automatically, or open Tampermonkey and run `Job Autofill - Sharok`.

The script fills common text fields, text areas, native dropdowns, radio buttons, checkboxes, contenteditable fields, and many custom dropdown controls used by modern job forms. Always review the form before submitting.

## Files

- `index.html`: simple mobile setup page.
- `autofill.js`: the actual autofill script with your details and Tampermonkey metadata.
- `profile.json`: your editable profile source.
- `generator.html`: advanced builder/debug page.

## Privacy Warning

`autofill.js` contains your personal details. If your GitHub repo is public, anyone can read those details.

For privacy, use a private hosting option or remove sensitive fields before publishing.

## Limitation

Resume and cover letter upload fields cannot be filled by JavaScript. Browsers block scripts from selecting files. Forms that ask for resume or cover letter links can be filled.
