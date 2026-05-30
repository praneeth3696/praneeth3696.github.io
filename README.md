# praneeth-dev

## About
Personal portfolio for Praneeth Reddy Yeddula - Systems enthusiast, certified nerd, and 2nd year integrated MSc Software Systems student at PSG College of Technology.

## Live Site
[https://praneeth3696.github.io](https://praneeth3696.github.io)

## Tech Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design**: Dark hacker aesthetic, fully responsive, zero external libraries
- **Hosting**: GitHub Pages

## How to add a skill/project

The website uses a modular array pattern. To add new content, simply edit `public/assets/js/main.js` and add an object to the corresponding array at the top of the file.

### Adding a Skill
Add a new object to the `SKILLS` array:
```javascript
{ name: 'Rust', icon: '🦀', category: 'Language' }
```

### Adding a Project
Add a new object to the `PROJECTS` array:
```javascript
{
  name: 'New Project',
  description: 'Project description here.',
  tags: ['Tech1', 'Tech2'],
  githubUrl: 'https://github.com/praneeth3696/new-project'
}
```

### Adding a Contact Link
Add a new object to the `CONTACT_LINKS` array using an SVG path for the icon:
```javascript
{
  platform: 'Twitter',
  url: 'https://twitter.com/...',
  svgPath: '<path d="..."/>'
}
```
No HTML or CSS changes are required! The JavaScript will automatically render the new cards.
