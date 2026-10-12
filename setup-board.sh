#!/usr/bin/env bash
# Creates the Averixa website tasks as GitHub issues and adds them to the project board.
# Run from inside the averixa-website folder:  bash setup-board.sh
set -e

ORG="AVERIXA-WEB-DEVELOPEMENT-TEAM"
REPO="$ORG/averixa-website"
PROJECT_NUMBER="2"   # change this to your board's number (see the board's URL: .../projects/1)

# Labels: one per area of the site
label() { gh label create "$1" --repo "$REPO" --color "$2" --force >/dev/null; }
label "home"            "2c5ce0"
label "portfolio"       "3d6cf0"
label "service-request" "17306e"
label "contact"         "3fb45f"
label "404"             "5fd07e"
label "design"          "a9b4d6"
label "backend"         "33467f"
label "content"         "f2c94c"
label "quality"         "eb5757"
label "launch"          "9b51e0"

# task "Title" "label" "Owner"
task() {
  url=$(gh issue create --repo "$REPO" --title "$1" --label "$2" --body "Owner: $3

Done means: merged into dev, checked on the Vercel preview, and the Definition of done in the brief is ticked.")
  gh project item-add "$PROJECT_NUMBER" --owner "$ORG" --url "$url" >/dev/null
  echo "Added: $1"
}

# Home
task "Hero: copy, buttons and growth diagram"                       home "Nnenna"
task "Hero card and Four steps don't repeat each other"            home "Nnenna, Albert"
task "What we do: service cards"                                    home "Albert"
task "Four steps: process cards"                                    home "Albert"
task "The human parts section with id=about"                       home "Albert"
task "Selected works preview linking to Portfolio"                  home "Albert"

# Portfolio
task "Portfolio: case study cards with result badges"              portfolio "Albert"
task "Portfolio: industry filter pills"                             portfolio "Albert"
task "Portfolio: empty state when a filter has no results"          portfolio "Albert"

# Service request
task "Service request step 1: choose a service"                     service-request "Vivian"
task "Service request step 2: budget and timeline chips"            service-request "Vivian"
task "Service request step 3: contact details with validation"      service-request "Vivian"
task "Service request: summary and success screen"                  service-request "Vivian"
task "Service request API: email request to the Averixa inbox"      backend "Fortunatus"
task "Service request API: confirmation email to the client"        backend "Fortunatus"
task "Service request API: spam protection"                         backend "Fortunatus"
task "Test the service request end to end with a real submission"   service-request "Nnenna, Fortunatus"

# Contact and 404
task "Contact page from the UI design"                              contact "Mirachel"
task "Contact: social cards from socials.js"                        contact "Dami"
task "404 page with Back to Home button"                            404 "Mirachel, Dami"

# Design
task "Design: 404 page"                                             design "Michelle"
task "Design: add Contact page to Figma"                            design "Michelle"
task "Design: apply Figma copy fixes"                               design "Michelle"
task "Design: approve hero diagram and update Figma"                design "Michelle"
task "Export logo SVG and favicon"                                  design "Chiedozie"
task "Share preview image for WhatsApp and LinkedIn"                design "Chiedozie"
task "Group photo by 24 October"                                    content "Chiedozie, Mirachel"

# Content
task "Real WhatsApp number and social handles in socials.js"        content "Nnenna"
task "Final service descriptions"                                   content "Nnenna"
task "Real case studies with client permission"                     content "Nnenna, Mirachel"
task "Remove all placeholder text and images"                       content "Mirachel"

# Quality
task "Test every page at 375px, 768px and 1280px"                   quality "All"
task "Test on a real iPhone and a real Android phone"               quality "Mirachel"
task "Lighthouse check on every page"                               quality "Nnenna"

# SEO and launch
task "Page titles and descriptions for every page"                  backend "Fortunatus"
task "Sitemap and robots.txt"                                       backend "Fortunatus"
task "Buy the domain by 16 October"                                 launch "Nnenna"
task "Connect the domain to Vercel with https"                      launch "Fortunatus"
task "Decide Vercel plan before launch"                             launch "Nnenna"
task "Final team review of the dev preview on 30 October"           launch "All"
task "Merge dev into main and check the live site on 1 November"    launch "Nnenna"

echo "All tasks created and added to the board."
