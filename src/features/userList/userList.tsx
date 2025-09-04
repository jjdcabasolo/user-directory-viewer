import { useState, useEffect } from "react";
import { DataTable, type DataTableRowEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import type { User } from "../../types";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const navigate = useNavigate();

  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  const onRowClick = (e: DataTableRowEvent) => {
    const data = e.data as User;

    if (data) {
      navigate(`/users/${data.id}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          console.error("Unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ProgressSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <DataTable value={data} onRowClick={onRowClick}>
        <Column field="name" header="Name" />
        <Column field="username" header="Username" />
        <Column field="email" header="Email" />
        <Column field="phone" header="Phone" />
      </DataTable>
    </div>
  );
}
