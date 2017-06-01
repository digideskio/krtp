/*
 * +===============================================
 * | Author:        Parham Alvani (parham.alvani@gmail.com)
 * |
 * | Creation Date: 01-06-2017
 * |
 * | File Name:     rtp-session.js
 * +===============================================
 */
const crypto = require('crypto');


/**
 * RTP session: An association among a set of participants
 * communicating with RTP.
 */
class RTPSession {
  /**
   * Creates a RTP session
   * @param {number} port - RTP port
   */
  constructor(port) {
    /** @member {number} */
    this.port = port;
    /** @member {number} */
    this.sequenceNumber = crypto.randomBytes(2).readUInt16BE();
    /**
     * @member {Buffer} - The SSRC field identifies
     * the synchronization source
     */
    this.ssrc = crypto.randomBytes(4).toString('hex');
  }
}

module.exports = RTPSession;
