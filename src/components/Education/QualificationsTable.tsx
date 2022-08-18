import React from 'react'

interface Qualification {
  courseName: string
  grade: string
  gradeTooltip?: string
  isPredicted: boolean
  year: string
}

const Education: Qualification[] = [
  {
    courseName: 'A-level Computer Science',
    grade: 'A*',
    isPredicted: false,
    year: '2022',
  },
  {
    courseName: 'BTEC L3 Ext Cert - Computing',
    grade: 'DS*',
    isPredicted: false,
    gradeTooltip: 'Distinction star',
    year: '2022',
  },
  {
    courseName: 'BTEC L3 Cert - Business',
    grade: 'DS',
    isPredicted: false,
    gradeTooltip: 'Distinction',
    year: '2022',
  },
  {
    courseName: 'A-level Maths',
    grade: 'A*',
    isPredicted: false,
    year: '2021',
  },
]

interface Props {
  className?: string
}

const QualificationsTable: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {Education.map(course => (
            <tr key={course.courseName}>
              <td>{course.year}</td>
              <td>{course.courseName}</td>
              <td>
                {course.gradeTooltip ? (
                  <abbr data-tooltip aria-label={course.gradeTooltip}>
                    {course.grade}
                  </abbr>
                ) : (
                  course.grade
                )}
                {course.isPredicted && (
                  <sup data-tooltip aria-label="predicted result">
                    P
                  </sup>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>P - predicted result (still studying)</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default QualificationsTable
