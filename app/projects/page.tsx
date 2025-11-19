import InfiniteMenu from '@/components/InfiniteMenu';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Projects() {
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'My Portfolio',
      description: 'The thing you are experiencing right now!',
      techStack: [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
      ]
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?',
      techStack: []
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?',
      techStack: []
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?',
      techStack: []
    }
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-transparent font-sans overflow-hidden">
      <div className="w-screen h-dvh relative z-0">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}
