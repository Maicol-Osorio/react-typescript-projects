import styles from "./App.module.css"
import { Form } from "./components/Form/Form"
import { Spinner } from "./components/Spinner/Spinner"
import { WeatherDetails } from "./components/WeatherDetails/WeatherDetails"
import { useWeather } from "./Hooks/useWeather"

function App() {

  const { fetchWeather, weathers, notFound, isEmpty, spiner } = useWeather()
  return (
    <>
      <h1 className={styles.title}>bucador de clima</h1>
      <div className={styles.container}>
        <section className={styles.section}>
          <Form
            fetchWeather={fetchWeather}
            notFound={notFound}
          />
        </section>


        <section >
          {spiner && (
            <Spinner />
          )}
          {isEmpty && (
            <WeatherDetails
              weathers={weathers}
            />
          )}

          
        </section>
      </div>
    </>
  )
}

export default App
