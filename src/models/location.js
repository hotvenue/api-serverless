import Joi from 'joi';
import dynogels from 'dynogels-promisified';

export default dynogels.define('Location', {
  hashKey: 'id',
  tableName: 'locationsTable',
  timestamps: true,

  schema: {
    id: dynogels.types.uuid(),
    name: Joi.string(),
  },
});
