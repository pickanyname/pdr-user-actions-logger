//Registry Events

function registryEvents() {
  return {patientSearch : 'Patient search event',
          patientViewing : 'Patient viewing event',
          patientCreation : 'Patient creation event',
          periodClose : 'Period close event',
          hardClose : 'Hard close event',
          invoiceGeneration : 'Invoice generation event'
         };
}

module.exports = registryEvents;