'use client';

import { useState, useMemo } from 'react';
import Button from '../Button/Button';

enum VacancyCategories {
  actual = 'actual-vacancies',
  irrelevant = 'irrelevant-vacancies',
}

interface IVacancy {
  _id: string;
  category: string;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

interface IProps {
  vacancies: IVacancy[];
}

export default function VacanciesCatalogue({ vacancies }: IProps) {
  const [filterParams, setFilterParams] =
    useState<VacancyCategories.actual | null>(VacancyCategories.actual);

  const visibleVacancies = useMemo(() => {
    return filterParams
      ? vacancies.filter(({ category }) => category === filterParams)
      : vacancies;
  }, [vacancies, filterParams]);

  return (
    <div>
      <div className="flex justify-around">
        <Button
          type="button"
          variant={filterParams ? 'secondary' : 'primary'}
          title="Всі вакансії"
          onClick={() => {
            setFilterParams(null);
          }}
        />
        <Button
          type="button"
          variant={filterParams ? 'primary' : 'secondary'}
          title="Актуальні вакансії"
          onClick={() => {
            setFilterParams(VacancyCategories.actual);
          }}
        />
      </div>
      <ul>
        {visibleVacancies.map(({ _id, title }) => (
          <li key={_id}>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
