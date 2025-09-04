import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../../types";
import { ProgressSpinner } from "primereact/progressspinner";
import { Card } from "primereact/card";

export default function UserDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
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

    if (params?.id) {
      fetchData();
    } else {
      navigate(`/users`);
    }
  }, []);

  if (loading) {
    return <ProgressSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card flex justify-content-center">
      {data && (
        <Card
          title={data.name}
          subTitle={`${data.username} <${data.email}>`}
          className="md:w-25rem"
        >
          <div>
            <i className="pi pi-home"></i>
            <span className="p-2 p-text">
              {data.address.street}, {data.address.city}
            </span>
          </div>
          <div>
            <i className="pi pi-link"></i>
            <span className="p-2 p-text">{data.website}</span>
          </div>
          <div>
            <i className="pi pi-phone"></i>
            <span className="p-2 p-text">{data.phone}</span>
          </div>
          <div>
            <i className="pi pi-warehouse"></i>
            <span className="p-2 p-text">{data.company.name}</span>
          </div>
        </Card>
      )}
    </div>
  );
}
