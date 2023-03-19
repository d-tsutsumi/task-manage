export default function PrimarilyButton({ text }: { text: string }) {
  return (
    <button
      className='w-full bg-pink-300 hover:bg-pink-600 
      text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      type='button'
    >
      {text}
    </button>
  );
}
