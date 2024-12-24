export const heroSections = [
  {
    id: 1,
    title: "Music",
    description: "Music is a parallel passion. I’ve toured and refurbish guitars.",
    children: <div>Your custom content here (e.g., chat component)</div>, // Use 'children'
  },
  {
    id: 2,
    title: "Development",
    description: "I love solving problems and building solutions with technology.",
    children: (
      <img
        src="/images/development.png"
        alt="Development Illustration"
        className="rounded-lg shadow-lg w-full max-w-md"
      />
    ),
    reverse: true,
  },
  {
    id: 3,
    title: "Leadership",
    description: "Leadership is about setting an example and pursuing excellence.",
    children: <p>Custom content for leadership here</p>,
  },
];
