import InfiniteMenu from '@/components/InfiniteMenu';
import Prism from '@/components/Prism';

export default function Projects() {
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'My Portfolio',
      description: 'The thing you are experiencing right now!'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-transparent font-sans overflow-hidden">
      {/* Static Prism background */}
      <Prism
        animationType="rotate"
        timeScale={0}
        noise={0}
        suspendWhenOffscreen={false}
        transparent={true}
        scale={2.7}       // tweak if you want
        glow={1.8}        // tweak if you want
        bloom={0.8}         // tweak if you want
      />

      {/* Foreground content */}
      <div className="w-screen h-dvh relative z-0">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}
