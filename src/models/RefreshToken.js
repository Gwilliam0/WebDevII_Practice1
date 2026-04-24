import mongoose from 'mongoose';

const refreshTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User_practice1',
    required: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 } // TTL index: MongoDB elimina automáticamente
  },
  createdByIp: String,
  revokedAt: Date,
  revokedByIp: String
}, {
  timestamps: true
});

// Método para verificar si está activo
refreshTokenSchema.methods.isActive = function() {
  return !this.revokedAt && this.expiresAt > new Date();
};

const RefreshToken = mongoose.model('RefreshToken_Practice1', refreshTokenSchema);
export default RefreshToken;