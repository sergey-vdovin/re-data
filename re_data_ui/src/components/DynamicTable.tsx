import React, { useMemo } from 'react';
import Table, { ColumnsProps } from './Table';
// import { EmptyTable } from '../partials';

interface DynamicTableType {
  values: Record<string, string>[] | null;
}

const DynamicTable = ({ values }: DynamicTableType): JSX.Element => {
  console.log('values => ', values);
  if (!values) {
    return (
      <Table
        columns={[]}
        data={[]}
        showSearch={false}
        // EmptyData={(
        //   <EmptyTable
        //     title="Nothing to see here"
        //     subtitle="You currently do not have any uploads."
        //   />
        // )}
      />
    );
  }
  const val = JSON.parse(values as unknown as string) as Record<string, string>[];

  const columns: ColumnsProps[] = useMemo(() => {
    const keys = Object.keys(val?.[0]);
    const result = [];

    for (let index = 0; index < keys.length; index++) {
      const element = keys[index];
      result.push({
        Header: element?.replace('_', ' '),
        accessor: element,
      });
    }

    return result;
  }, [val]);

  const data: Record<string, string>[] = useMemo(() => {
    const result: Record<string, string>[] = [];

    for (let index = 0; index < val.length; index++) {
      const element = val[index];
      result.push(element);
    }
    return result;
  }, [val]);

  return <Table columns={columns} data={data} showSearch={false} />;
};

export default DynamicTable;