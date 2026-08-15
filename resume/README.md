# Resume (ATS-optimized)

`resume.html` is the source of truth for the CV. Edit it, then regenerate the PDF.

## Regenerate the PDF

```bash
cd resume
google-chrome --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=Asifur_Rahman_Resume.pdf resume.html

# copy into the site so the Download CV button serves the new version
cp Asifur_Rahman_Resume.pdf ../public/Asifur_Rahman_Resume.pdf
```

## Check it still fits one page

```bash
./measure.sh
```

Reports the rendered content height against the A4 printable area. Keep `slack`
positive — if it goes negative the resume spills onto a second page.

To make room: shorten a bullet, or nudge `line-height` / `font-size` in the
`body` rule. Current settings leave only ~7px of slack, so any added line needs
a corresponding cut.

## Check it still parses as an ATS reads it

```bash
pdftotext Asifur_Rahman_Resume.pdf - | less
```

The plain-text output is roughly what an applicant tracking system sees. Verify
that sections appear in reading order and that no word got mangled.

> Watch for hyphenated words breaking across a line — `pdftotext` drops the
> hyphen, so "well-documented" can extract as "welldocumented". Reword if it
> happens.

## ATS rules this file follows

- Single column throughout — no tables, text boxes, columns, images or icons
- Standard font (Arial), real selectable text, nothing in page headers/footers
- Standard section headings (Professional Summary, Technical Skills,
  Professional Experience, Projects, Education, Achievements)
- Standard `•` bullets
- Contact links written as full URLs, since an ATS extracts text and the word
  "LinkedIn" alone carries no address
- Technical Skills placed early for keyword matching
- One page
