import { useGetGmailEmail, useGetGmailEmailDetails } from "@/hooks/useEmail";

const ShowEmail = ({ id }) => {
  const { data } = useGetGmailEmailDetails(id);
  return (
    <>
      {data && (
        <div className="py-4">
          {data.payload.headers.map((i) => (
            <div key={Math.random()}>
              {i.name == "Subject" && (
                <p className="font-bold">Subject: {i.value}</p>
              )}

              <p> {i.name == "Date" && i.value}</p>
            </div>
          ))}
          <p>{data.snippet}</p>
          <hr />
        </div>
      )}
    </>
  );
};

const GmailEmail = () => {
  const { data } = useGetGmailEmail();
  return (
    <div>
      {data
        ? data.messages.map((i) => <ShowEmail key={i.id} id={i.id} />)
        : "Loading..."}
    </div>
  );
};

export default GmailEmail;
