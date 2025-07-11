
const dbConnect = require('../lib/db')
const Job = require('../models/Job')


const deleteExpiredJobs = async () => {
  try {
    await dbConnect()

    const now = new Date()
    const result = await Job.deleteMany({ expiry: { $lt: now } })

    console.log(`${result.deletedCount} expired job(s) deleted.`)
    process.exit(0)
  } catch (error) {
    console.error('Error deleting jobs:', error)
    process.exit(1)
  }
}

deleteExpiredJobs()
