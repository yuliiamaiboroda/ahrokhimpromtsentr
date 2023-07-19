'use client';

import Button from '@/components/Button';

export default function Page() {
  return (
    <div>
      its VACANCIES page
      <div className="flex items-center gap-5 justify-center">
        <Button
          onClick={() => console.log('click')}
          variant="primary"
          type="button"
          title="Всі вакансіїї"
        />
        <Button
          onClick={() => console.log('click')}
          variant="secondary"
          type="button"
          title="Актуальні вакансії"
        />
      </div>
    </div>
  );
}
