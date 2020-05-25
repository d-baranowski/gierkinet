package sessions

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/stretchr/testify/assert"
	"library/database"
	"testing"
)

var (
	testSessionStoreConfig = SessionStoreConfig{
		StoreConfig: database.StoreConfig{
			TableName: aws.String("gierkinet-dev-dynamodb-main"),
			Region:    aws.String("local"),
			Endpoint:  aws.String("http://localhost:8000"),
		},
	}
)

func TestIntegrationReadSession(t *testing.T) {
	if testing.Short() {
		t.Skip("Skipping integration test")
	}
	err := database.TestResetTable()

	assert.NoError(t, err, "Failed to reset table")
	if err != nil {
		t.FailNow()
		return
	}

	err = database.TestSetTableState("state-1")

	assert.NoError(t, err, "Failed to set table state")
	if err != nil {
		t.FailNow()
		return
	}

	underTest, err := NewSessionStore(testSessionStoreConfig)

	assert.NoError(t, err, "Failed to configure store")
	if err != nil {
		t.FailNow()
		return
	}

	actual, err := underTest.Get("1cP7biMd8ys6BWtd7JsYaejQoPe")

	assert.NoError(t, err, "Failed to get record")
	if err != nil {
		t.FailNow()
		return
	}

	expected := SessionRecord{
		SessionFields: SessionFields{
			SessionID: "1cP7biMd8ys6BWtd7JsYaejQoPe",
			Username:  "danny",
			Picture:   "https://lh3.googleusercontent.com/a-/AOh14GjEUZoVup3yWpFBsHLTb3GPnQbDNAhwTmsLHi38=s96-c",
		},
		Record: database.Record{
			PK:        "SESSION#1cP7biMd8ys6BWtd7JsYaejQoPe",
			SK:        "SESSION#1cP7biMd8ys6BWtd7JsYaejQoPe",
			Type:      "Session",
			Timestamp: "2020-05-25T14:53:48.720Z",
		},
	}

	assert.Equal(t, expected, actual)

	notFound, err := underTest.Get("notavalidid")

	assert.NoError(t, err, "Failed to get not found record")
	if err != nil {
		t.FailNow()
		return
	}

	assert.Equal(t, SessionRecord{}, notFound)
}