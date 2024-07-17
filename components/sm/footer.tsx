import translate from '@/lib/trad';

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center align-middle">
      <div>{translate('made_from')}</div>
    </div>
  );
}
