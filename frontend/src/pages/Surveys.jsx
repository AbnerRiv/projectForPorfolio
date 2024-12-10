import React, { useState } from "react";
import { Link } from "react-router";

function Surveys() {
    const [surveys] = useState(JSON.parse(localStorage.getItem('surveys')));
    return (
        <>
            {
                !surveys &&
                <span>No se ha creado ninguna encuesta todavía</span>
            }
            <h1>Encuestas:</h1>
            <section id="surveysContainer">
                {surveys.map((survey) => (
                    <section key={survey.id}>
                        <h2>{survey.title}</h2>
                       
                        <Link to={`/surveys/${survey.id}`} className="cursor-pointer p-1 bg-slate-200 rounded-md" >
                            Responder encuesta
                        </Link>
                    </section>
                ))}
            </section>
        </>
    )
  }
  
  export default Surveys
  