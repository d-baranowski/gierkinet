package sessions

import (
	"fmt"
	"github.com/segmentio/ksuid"
	"library/database"
)

type SessionFields struct {
	SessionID string
	Username   string
	Picture    string
}

type SessionRecord struct {
	SessionFields
	database.Record
}

func SessionRecordPK(sessionID string) string {
	return fmt.Sprintf("SESSION#%s", sessionID)
}

func SessionRecordSK(sessionID string) string {
	return SessionRecordPK(sessionID)
}

func NewSessionID() (id string, err error) {
	bytes, err := ksuid.New().MarshalText()
	id = string(bytes)
	return
}

func NewSessionRecord(fields SessionFields) SessionRecord {
	result := SessionRecord{
		SessionFields: fields,
	}

	result.BasePopulate()
	result.PK = SessionRecordPK(fields.SessionID)
	result.PK = SessionRecordSK(fields.SessionID)
	result.Type = "Session"

	return result
}
