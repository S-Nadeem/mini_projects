export default function Suggestions({ data, handleChange }) {
  return (
    <>
      <div className="dropdown_list">
        {data && data.length
          ? data.map((item, index) => {
              return (
                <>
                  <div key={index} onClick={handleChange}>
                    {item}
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}
