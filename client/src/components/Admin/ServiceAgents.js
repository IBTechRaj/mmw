import React from 'react'

export default function ServiceAgents() {

  const [agentsData, setAgentsData] = useState(null);

  const agentsUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/users/` : `http://localhost:3001/users/`

  const getAgents = () => {
    axios.get(agentsUrl, )
      .then(response => {
        console.log('agents.dat', response.data)
        setAgentsData(response.data)
      })
  }
  useEffect(() => {

    getAgents()
  }, [])

  return (
    <div>

    <ul>
              {agentsData &&
                agentsData.map(({ id, first_name, last_name, Email }) => (
                  <li key={id}>
                    <h5> First Name: {first_name},  {'   '} Last Name: {last_name}, {'   '} Email: {Email}
                      </h5>
                  </li>

                ))}
            </ul>
    </div>
  )
}
