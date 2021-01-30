const [pgp, db] = require('./db')

module.exports = async (minValue, maxValue) => {
  const avg_price = (minValue + maxValue) / 2
  let ranking = []
  
  var neighbourhoods = await db.many("select neighbourhood, count(*) as total, count(*) filter (where price between $1 and $2 ), avg(price) from houses as s where unit_type = 0 and neighbourhood is not null group by neighbourhood order by count desc limit 5", [minValue, maxValue])

  neighbourhoods.sort((a, b) => a.avg - b.avg)

  for (let i = 0; i < neighbourhoods.length; i++) {
    let n = neighbourhoods[i];
    ranking.push({'neighbourhood': n.neighbourhood, 'rating': (n.count / n.total) * .8 + ((5 - i) / 5) * .2})
  }

  ranking.sort((a, b) => b.rating - a.rating)

  return ranking
  // console.log(neighbourhoods)
  // console.log(ranking)
}